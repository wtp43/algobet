'use client';

import { Stack, TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { teams } from '@/constants/constants';
import { AutocompleteSearch } from '@/components/AutocompleteSearch/AutocompleteSearch';

export default function BoxscoreForm() {
  const [state, setState] = useState();

  const submitHandler = () => {
    console.log('submitting');
  };
  const form = useForm({
    initialValues: {
      email: '',
      team: '',
    },

    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Stack h={300} bg="var(--mantine-color-body)">
      <Box maw={340} mx="auto">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <AutocompleteSearch handleChange={submitHandler} searchItems={teams} form={form} />
          <TextInput withAsterisk label="Email" placeholder="your@email.com" />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </Stack>
  );
}
