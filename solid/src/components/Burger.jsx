function Burger(props){
  return(
    <div className="space-y-1.5 cursor-pointer" onClick={props.toggle}>
      <div classList={{'w-8 h-1 bg-gray-700': true, 'rotate-45 translate-y-[0.35em]': props.isOpen}}></div>
      <div classList={{'w-8 h-1 bg-gray-700': true, 'hidden': props.isOpen }}></div>
      <div classList={{'w-8 h-1 bg-gray-700': true, '-rotate-45 -translate-y-[0.35em]': props.isOpen }}></div>
    </div>
  );
}

export default Burger;