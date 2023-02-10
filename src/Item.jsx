import React from 'react';
import { useSortable} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './Item.css';

export default function Item({ id, name }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: id});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return ( 
    <div 
      ref={setNodeRef}
      className='item'
      style={style}
      {...attributes}
      {...listeners}
    >
      {name}
    </div>
  )
}