'use client';

import { Text } from '@visx/text';
import * as d3 from 'd3';
import { useMemo, useCallback } from 'react';
import { MarkerCircle } from '@visx/marker';
import { AreaClosed, Line, Bar, LinePath } from '@visx/shape';
import { curveMonotoneX, curveLinear, curveStep } from '@visx/curve';
import { GridRows, GridColumns } from '@visx/grid';
import { scaleTime, scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend';
import { withTooltip, Tooltip, TooltipWithBounds, defaultStyles } from '@visx/tooltip';
import { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip';
import { localPoint } from '@visx/event';
import { LinearGradient } from '@visx/gradient';
import { max, extent, bisector } from '@visx/vendor/d3-array';
import { timeFormat } from '@visx/vendor/d3-time-format';
import { Axis } from '@visx/axis';
import { ChartData } from '@/types/types';
import classes from './PlayerLineChartStyles.module.css';

type TooltipData = ChartData;

export const background = '#1f1f1f';
// export const background = '#052545';
export const background2 = '#204051';
export const accentColor = '#edffea';
export const accentColorDark = '#75daad';

const colors = {
  white: '#FFFFFF',
  black: '#1B1B1B',
  gray: '#98A7C0',
  darkGray: '#2A2A2A',
  accent: '#d4e9ff',
  darkAccent: '#03386e',
};

const tooltipStyles = {
  ...defaultStyles,
  background,
  border: '1px solid white',
  color: 'white',
};

// util

const formatDate = timeFormat("%b %d, '%y");
// accessors
const getDate = (d: ChartData) => new Date(d?.date ?? new Date());
const getDataPointValue = (d: ChartData) => d?.pts ?? 0;

const bisectDate = bisector<ChartData, Date>((d) => new Date(d?.date ?? new Date())).left;
export type AreaProps = {
  width: number;
  height: number;
  data: ChartData[];
  col: string;
  margin?: { top: number; right: number; bottom: number; left: number };
};

const legendGlyphSize = 15;
export default withTooltip<AreaProps, TooltipData>(
  ({
    width,
    height,
    data,
    col,
    margin = { top: 30, right: 30, bottom: 30, left: 30 },
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipTop = 0,
    tooltipLeft = 0,
  }: AreaProps & WithTooltipProvidedProps<TooltipData>) => {
    if (width < 10) return null;

    //process data
    const dataPoints = useMemo(
      () =>
        data.map((e: ChartData) => ({
          date: e.match?.date,
          pts: e.pts,
          playerName: e.playerInfo?.playerName,
        })),
      []
    );

    const ordinalColorScale = scaleOrdinal({
      domain: [dataPoints[0]?.playerName ?? 'Player'],
      range: [colors.accent],
    });
    // bounds
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    // scales
    const dateScale = useMemo(
      () =>
        scaleTime({
          range: [margin.left, innerWidth + margin.left],
          domain: extent(dataPoints, getDate) as [Date, Date],
        }),

      [innerWidth, margin.left]
    );

    const maxDataPointValue = 70 * 1.25;
    const dataPointScale = useMemo(
      () =>
        scaleLinear({
          range: [innerHeight + margin.top, margin.top],
          domain: [0, maxDataPointValue],

          nice: true,
        }),
      [margin.top, innerHeight]
    );

    // tooltip handler
    const handleTooltip = useCallback(
      (event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>) => {
        const { x } = localPoint(event) || { x: 0 };
        // adjust this for margin left so tooltip doesn't end up desynced
        const x0 = dateScale.invert(x);
        const index = bisectDate(dataPoints, x0, 1);
        const d0 = dataPoints[index - 1];
        const d1 = dataPoints[index];
        let d = d0;
        if (d1 && getDate(d1)) {
          d = x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0;
        }
        showTooltip({
          tooltipData: d,
          tooltipLeft: x,
          tooltipTop: dataPointScale(getDataPointValue(d) ?? 0),
        });
      },
      [showTooltip, dataPointScale, dateScale]
    );
    return (
      <div style={{ position: 'relative' }}>
        <svg width={width} height={height}>
          <rect
            x={0}
            y={0}
            width={width}
            height={height}
            style={{
              fill: background,
            }}
            rx={14}
          />
          <GridRows
            left={margin.left}
            scale={dataPointScale}
            width={innerWidth}
            strokeDasharray="1,3"
            stroke={accentColor}
            strokeOpacity={0}
            pointerEvents="none"
          />
          <GridColumns
            top={margin.top}
            left={margin.left}
            scale={dateScale}
            height={innerHeight}
            strokeDasharray="1,3"
            stroke={accentColor}
            strokeOpacity={0.2}
            pointerEvents="none"
          />

          <Axis
            scale={dateScale}
            top={height - margin.top}
            orientation="bottom"
            stroke={colors.darkGray}
            strokeWidth={1.5}
            rangePadding={96}
            tickStroke={colors.darkGray}
            // tickFormat={(value) => timeFormat('%b %d')(value)}
            tickLabelProps={() => ({
              fill: colors.gray,
              textAnchor: 'middle',
              fontSize: 10,
              verticalAnchor: 'middle',
            })}
          />
          <Axis
            scale={dataPointScale}
            numTicks={5}
            left={margin.left}
            orientation="left"
            stroke={colors.darkGray}
            strokeWidth={1.5}
            tickStroke={colors.darkGray}
            tickLabelProps={() => ({
              fill: colors.gray,
              textAnchor: 'end',
              fontSize: 10,
              verticalAnchor: 'middle',
            })}
            tickFormat={(value) => `${value}`}
          />
          <LinearGradient id="line-gradient" from={colors.accent} to={colors.darkAccent} />
          <LinearGradient
            id="area-background-gradient"
            from={colors.accent}
            to={colors.darkAccent}
            toOpacity={0.1}
          />
          <AreaClosed<ChartData>
            data={dataPoints}
            x={(d) => dateScale(getDate(d)) ?? new Date()}
            y={(d) => dataPointScale(getDataPointValue(d) ?? 0)}
            yScale={dataPointScale}
            strokeWidth={1}
            stroke="url(#line-gradient)"
            fill="url(#area-background-gradient)"
            curve={curveMonotoneX}
          />
          <Text
            style={{
              fill: colors.white,
              fontSize: 24,
              fontWeight: 600,
            }}
            x={margin.left}
            y={margin.top * 1.5}
          >
            Points Scored Per Game
          </Text>
          <Bar
            x={margin.left}
            y={margin.top}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            rx={14}
            onTouchStart={handleTooltip}
            onTouchMove={handleTooltip}
            onMouseMove={handleTooltip}
            onMouseLeave={() => hideTooltip()}
          />
          {tooltipData && (
            <g>
              <Line
                from={{ x: tooltipLeft, y: margin.top }}
                to={{ x: tooltipLeft, y: innerHeight + margin.top }}
                stroke={accentColorDark}
                strokeWidth={2}
                pointerEvents="none"
                strokeDasharray="5,2"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop + 1}
                r={4}
                fill="black"
                fillOpacity={0.1}
                stroke="black"
                strokeOpacity={0.1}
                strokeWidth={2}
                pointerEvents="none"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r={4}
                fill={accentColorDark}
                stroke="white"
                strokeWidth={2}
                pointerEvents="none"
              />
            </g>
          )}
        </svg>
        {tooltipData && (
          <div>
            <TooltipWithBounds
              key={Math.random()}
              top={tooltipTop - 12}
              left={tooltipLeft + 12}
              style={tooltipStyles}
            >
              {`Points Scored: ${getDataPointValue(tooltipData)}`}
            </TooltipWithBounds>
            <Tooltip
              top={innerHeight + margin.top - 14}
              left={tooltipLeft}
              style={{
                ...defaultStyles,
                minWidth: 72,
                textAlign: 'center',
                transform: 'translateX(-50%)',
              }}
            >
              {formatDate(getDate(tooltipData))}
            </Tooltip>
          </div>
        )}

        <div className={classes.legends2}>
          <div className={classes.legend}>
            <div className={classes.title}>Player</div>
            <LegendOrdinal
              scale={ordinalColorScale}
              labelFormat={(label) => `${label.toUpperCase()}`}
            >
              {(labels) => (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  {labels.map((label, i) => (
                    <LegendItem key={`legend-quantile-${i}`} margin="0 5px">
                      <svg width={legendGlyphSize} height={legendGlyphSize}>
                        <rect fill={label.value} width={legendGlyphSize} height={legendGlyphSize} />
                      </svg>
                      <LegendLabel align="left" margin="0 0 0 4px">
                        {label.text}
                      </LegendLabel>
                    </LegendItem>
                  ))}
                </div>
              )}
            </LegendOrdinal>
          </div>
        </div>
        {/* <div className={classes.legends2}> */}
        {/*   <LegendOrdinal scale={ordinalColorScale} direction="row" labelMargin="0 15px 0 0" /> */}
        {/* </div> */}
      </div>
    );
  }
);
