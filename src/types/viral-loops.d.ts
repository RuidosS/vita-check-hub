
declare namespace JSX {
  interface IntrinsicElements {
    'form-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      ucid: string;
    }, HTMLElement>;
  }
}
