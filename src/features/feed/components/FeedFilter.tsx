import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faFilter, faFire, faChartLine, faClock } from '@fortawesome/free-solid-svg-icons';
import DefaultButton from '@/components/ui/DefaultButton';
// import { useFeed } from '../api/index';

export type SortOption = 'newest' | 'hottest' | 'topRated'; 

export default function FeedFilter({value, onChange,}: {value:SortOption; onChange: (v: SortOption) => void;}) {

  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const rootRef = useRef<HTMLDivElement | null>(null);
  const sortBtnId = 'dropdownSortButton';
  const sortMenuId = 'dropdown-sort';

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!rootRef.current) return; 
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const choose = (opt: SortOption) => {
    onChange(opt);
    setOpen(false);
  }

  return (    
    // Sort and filter buttons
    <div ref={rootRef} className='relative'>
      <div className='flex gap-2'>
      
      <DefaultButton 
      icon={<FontAwesomeIcon icon={faCaretDown} />}
      id={sortBtnId}
      aria-haspopup="menu"
      aria-controls={sortMenuId}
      aria-expanded={open}
      onClick={() => setOpen((v) => !v)}
      className="text-center m-0 dark:bg-gray-800 text-sky-500  hover:text-sky-600 inline-flex items-center w-1/2 "
      type="button" 
      text='Sort'/>

        <DefaultButton 
      icon={<FontAwesomeIcon icon={faFilter} />}
      id="dropdownFilterButton"
        data-dropdown-toggle="dropdown-filter"
        className="text-center m-0 dark:bg-gray-800 text-sky-500  hover:text-sky-600 inline-flex items-center w-1/2 "
        type="button" text='Filter'/>

    </div>
    {/* Dropdown menu */}

      <div
        id={sortMenuId}
        role='menu'
        aria-labelledby={sortBtnId}
        className={[
          'absolute z-10 mt-2 w-40 rounded-sm  bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800',
          open ? 'block' : 'hidden',
        ].join(' ')}
      >
        <ul className="py-1 text-gray-700 dark:text-gray-200">
          <li>
            <DefaultButton iconPosition='left' icon={<FontAwesomeIcon icon={faClock} />} role='menuitem' className=' w-full text-start bg-transparent text-sky-500 outline-sky-500 hover:outline-sky-600 hover:text-sky-600' onClick={() => choose('newest')} text='Newest'/>
          </li>
          <li>
            <DefaultButton iconPosition='left' icon={<FontAwesomeIcon icon={faFire} />} role='menuitem' className='w-full text-start bg-transparent text-sky-500 outline-sky-500 hover:outline-sky-600 hover:text-sky-600' onClick={() => choose('hottest')} text='Hottest'/>
            </li>
            <li>
            <DefaultButton iconPosition='left' icon={<FontAwesomeIcon icon={faChartLine} />} role='menuitem' className='w-full text-start bg-transparent text-sky-500 outline-sky-500 hover:outline-sky-600 hover:text-sky-600' onClick={() => choose('topRated')} text='Top rated'/>
            </li>
        </ul>
      </div>
    </div>
  );
}
