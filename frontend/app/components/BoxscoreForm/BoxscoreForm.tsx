'use client';

import {
  Stack,
  Container,
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Paper,
  NumberInput,
  rem,
  SegmentedControl,
} from '@mantine/core';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { DateInput, DateInputProps, DateFormatter, DatePickerInput } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { teamInfo } from '@/constants/constants';
import { AutocompleteSearch } from '@/components/AutocompleteSearch/AutocompleteSearch';
import { BoxscoreSegmentedControl } from '../SegmentedControl/BoxscoreSegmentedControl';

const formatter: DateFormatter = ({ type, date, locale, format }) => {
  if (type === 'multiple' && Array.isArray(date)) {
    if (date.length === 1) {
      return dayjs(date[0]).locale(locale).format(format);
    }

    if (date.length > 1) {
      return `${date.length} dates selected`;
    }

    return '';
  }

  return '';
};

interface BoxscoreFormValues {
  team1: string;
  team2: string;
  matches: number;
  startDate: Date;
  endDate: Date;
  datesList: Date[];
  formLayout: string;
  dateInputType: string;
  headToHead: Boolean;
}
export function BoxscoreForm() {
  const [datesList, setDatesList] = useState<Date[]>([]);
  const [formLayout, setFormLayout] = useState('date');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [dateInputType, setDateInputType] = useState('range');

  const form = useForm<BoxscoreFormValues>({
    initialValues: {
      team1: '',
      team2: '',
      matches: 5,
      startDate: new Date(),
      endDate: new Date(),
      datesList: [],
      formLayout: 'date',
      dateInputType: 'range',
      headToHead: false,
    },

    validate: {
      team1: (value) => (Object.keys(teamInfo).includes(value) ? null : 'Invalid team'),
      matches: (value) => (value > 0 ? null : 'Number of matches must be set > 0 '),
    },
  });
  const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;
  const dateParser: DateInputProps['dateParser'] = (input) => dayjs(input, 'YYYY/MM/DD').toDate();
  return (
    <Paper shadow="xs" withBorder radius="md" p="md">
      <Container>
        <Group>
          <BoxscoreSegmentedControl value={formLayout} setValue={setFormLayout} />
          {formLayout === 'date' && (
            <SegmentedControl
              value={dateInputType}
              onChange={setDateInputType}
              data={[
                { label: 'Date Range', value: 'range' },
                { label: 'List', value: 'list' },
              ]}
            />
          )}

          <Checkbox label="Head to head matches only" {...form.getInputProps('headToHead')} />
        </Group>
        {/* manually set formlayout, dateinputtype,  */}
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <AutocompleteSearch
            searchItems={Object.keys(teamInfo).map((e) => teamInfo[e as keyof typeof teamInfo])}
            form={form}
            formField="team1"
          />
          {form.values.headToHead && (
            //todo: handle second team
            <AutocompleteSearch
              searchItems={Object.keys(teamInfo).map((e) => teamInfo[e as keyof typeof teamInfo])}
              form={form}
              formField="team2"
            />
          )}
          {formLayout === 'recent' && (
            <NumberInput
              label="Number of Matches"
              description="Returns the last 'x' games played by team"
              placeholder="Enter a positive number"
              allowDecimal={false}
              allowNegative={false}
              clampBehavior="strict"
              min={1}
              {...form.getInputProps('matches')}
            />
          )}
          {formLayout === 'date' && dateInputType === 'range' && (
            <>
              <DateInput
                dateParser={dateParser}
                leftSection={icon}
                valueFormat="YYYY/MM/DD"
                leftSectionPointerEvents="none"
                label="Start date"
                placeholder="Pick or type date"
                clearable
                value={startDate}
                onChange={setStartDate}
              />
              <DateInput
                dateParser={dateParser}
                leftSection={icon}
                valueFormat="YYYY/MM/DD"
                leftSectionPointerEvents="none"
                label="End date"
                placeholder="Pick or type date"
                clearable
                value={endDate}
                onChange={setEndDate}
              />
            </>
          )}
          {formLayout === 'date' && dateInputType === 'list' && (
            <DatePickerInput
              label="Pick dates"
              placeholder="Pick dates"
              // leftSection={icon}
              // leftSectionPointerEvents="none"
              clearable
              value={datesList}
              onChange={setDatesList}
              type="multiple"
              // dateParser={dateParser}
              valueFormatter={formatter}
            />
          )}

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Container>
    </Paper>
  );
}
