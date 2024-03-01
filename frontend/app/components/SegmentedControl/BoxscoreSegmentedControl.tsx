import { Center, SegmentedControl, rem } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

interface BoxscoreSegmentedControlProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
export function BoxscoreSegmentedControl({ value, setValue }: BoxscoreSegmentedControlProps) {
  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      data={[
        {
          value: 'date',
          label: (
            <Center style={{ gap: 10 }}>
              <IconEye style={{ width: rem(16), height: rem(16) }} />
              <span>Matches by Dates</span>
            </Center>
          ),
        },
        {
          value: 'recent',
          label: (
            <Center style={{ gap: 10 }}>
              <IconCode style={{ width: rem(16), height: rem(16) }} />
              <span>Recent Matches</span>
            </Center>
          ),
        },
      ]}
    />
  );
}
