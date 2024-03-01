'use client';

import { useEffect, useState } from 'react';
import { CloseButton, Combobox, TextInput, useCombobox } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

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

interface AutocompleteSearchProps {
  // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchItems: { abbr: string; id: number; name: string }[];
  formField: string;
  form: UseFormReturnType<BoxscoreFormValues>;
}

export function AutocompleteSearch({ searchItems, form, formField }: AutocompleteSearchProps) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState('');
  const filteredOptions = searchItems.filter(
    (item) =>
      item.abbr.toLowerCase().includes(value.toLowerCase().trim()) ||
      item.name.toLowerCase().includes(value.toLowerCase().trim())
  );
  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item.abbr} key={item.abbr}>
      {item.name}
    </Combobox.Option>
  ));

  useEffect(() => {
    // we need to wait for options to render before we can select first one
    combobox.selectFirstOption();
  }, [value]);

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        form.setFieldValue(formField, optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
      withinPortal={false}
    >
      <Combobox.Target>
        <TextInput
          label="Team"
          description="League: NBA"
          required
          placeholder="Type team name or abbrev."
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
            form.setFieldValue(formField, event.currentTarget.value);
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
          rightSection={
            <CloseButton
              aria-label="Clear input"
              onClick={() => {
                setValue('');
                form.setFieldValue('team', '');
              }}
              style={{ display: value ? undefined : 'none' }}
            />
          }
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>
          {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
