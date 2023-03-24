import React from 'react';
import classNames from 'classnames';

export default function PageButtons(props) {
  return (
    <div className='flex justify-center items-center my-2'>
      <a
        href={props.prevUrl}
        className={classNames('btn btn-blue w-10 inline-flex justify-center',
          { 'btn-disabled' : props.currentPage === 1 })
        }
        data-testid="leftButton"
      >
        {'<'}
      </a>
      <div className='inline-flex w-12 justify-center'>{props.currentPage}</div>
      <a
        href={props.nextUrl}
        className={classNames('btn btn-blue w-10 inline-flex justify-center',
          { 'btn-disabled' : props.currentPage === props.lastPage })
        }
        data-testid="rightButton"
      >
        {'>'}
      </a>
    </div>
  );
}
