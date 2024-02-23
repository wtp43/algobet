import { useEffect, useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

interface AutocompleteSearchProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchItems: { title: string; id: number }[];
  form: any;
}

export function AutocompleteSearch({ handleChange, searchItems, form }: AutocompleteSearchProps) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState('');
  const shouldFilterOptions = !searchItems.some((item) => item.title === value);
  const filteredOptions = shouldFilterOptions
    ? searchItems.filter((item) => item.title.toLowerCase().includes(value.toLowerCase().trim()))
    : searchItems;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item.title} key={item.title}>
      {item.title}
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
        form.setFieldValue('team', optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
      withinPortal={false}
    >
      <Combobox.Target>
        <TextInput
          label="Pick value or type anything"
          placeholder="Pick value or type anything"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
            form.setFieldValue('team', event.currentTarget.value);
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
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
