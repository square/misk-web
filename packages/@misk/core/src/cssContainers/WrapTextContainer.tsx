import styled, { StyledComponent } from "@emotion/styled"

/**
 * <WrapTextContainer>Long Text</WrapTextContainer>
 */
export const WrapTextContainer: StyledComponent<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >,
  Pick<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >,
    any
  >,
  any
> = styled.span`
  white-space: pre-wrap !important; /* Since CSS 2.1 */
  white-space: -moz-pre-wrap !important; /* Mozilla, since 1999 */
  white-space: -pre-wrap !important; /* Opera 4-6 */
  white-space: -o-pre-wrap !important; /* Opera 7 */
  word-wrap: break-word !important; /* Internet Explorer 5.5+ */
`
