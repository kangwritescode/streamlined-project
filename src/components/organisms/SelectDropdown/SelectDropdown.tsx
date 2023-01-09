import './SelectDropdown.scss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Listbox } from '@headlessui/react';
import arrowDown from './arrowDown.svg';
import { TermOption } from '../../../shared/types/types';

interface SelectDropdownProps {
  className?: string;
  onChange: (term: TermOption) => void;
}

const terms = [
  { id: 1, name: 'Net 7', unavailable: false },
  { id: 2, name: 'Net 15', unavailable: false },
  { id: 3, name: 'Net 30 (Default)', unavailable: false },
  { id: 4, name: 'Net 60', unavailable: false },
  { id: 5, name: 'Custom date', unavailable: false },
]

function SelectDropdown(props: SelectDropdownProps) {
  const { className, onChange } = props;
  const [term, setTerm] = useState(terms[0])

  useEffect(() => {
    onChange(term)
  }, [term])

  return (
    <Listbox value={term} onChange={setTerm}>
      <div className={classNames(className, 'o-select-dropdown-listbox-container disp-flex flex-dir-column')}>
        <Listbox.Button className="o-select-dropdown-button">{term.name}
          <img className='o-select-dropdown-arrow' height={14} src={arrowDown} />
        </Listbox.Button>
        <Listbox.Options className="o-select-dropdown-options">
          {terms.map((term) => (
            <Listbox.Option
              className="o-select-dropdown-option"
              key={term.id}
              value={term}
              disabled={term.unavailable}
            >
              {term.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}

export default SelectDropdown;
