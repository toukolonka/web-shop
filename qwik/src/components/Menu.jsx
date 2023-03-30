import { component$ } from '@builder.io/qwik';
import CustomLink from './CustomLink';

export default component$((props) => {

  return (
    <>
      { props.isOpen.value &&
      <div class='border-t-2'>
        <div class='flex justify-between text-sm font-medium ml-4 mr-1'>
          <CustomLink href="/" onClick={props.setOpen}>
            Home
          </CustomLink>
          <CustomLink href="/products" onClick={props.setOpen}>
            Products
          </CustomLink>
          <CustomLink href="/orders" onClick={props.setOpen}>
            Orders
          </CustomLink>
        </div>
      </div>}
    </>
  );
});