import { A, useLocation } from "solid-start";

function CustomLink({ href, children, dataTestId, ...props }) {
  const location = useLocation();
  const pathname = location.pathname;
  const isActive = href !== '/' && pathname.startsWith(href) || pathname === href;

  return (
    <A
      href={href}
      data-testid={dataTestId}
      {...props}
      classList={{'block py-2 pr-4 hover:scale-110': true, 'text-blue-700': isActive, 'text-gray-700': !isActive }}
    >
      {children}
    </A>
  );
}

export default CustomLink;