import { createSignal, createEffect } from "solid-js";
import { A, useLocation } from "solid-start";

function CustomLink({ href, children, dataTestId, ...props }) {
  return (
    <A
      href={href}
      data-testid={dataTestId}
      {...props}
      className="block py-2 pr-4 hover:scale-110 text-gray-700"
    >
      {children}
    </A>
  );
}

export default CustomLink;