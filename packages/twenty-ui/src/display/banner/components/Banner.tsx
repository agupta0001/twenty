import styled from '@emotion/styled';

const StyledBanner = styled.div<{ variant?: BannerVariant }>`
  align-items: center;
  backdrop-filter: blur(5px);
  background: ${({ theme, variant }) =>
    variant === 'danger' ? theme.color.red : theme.color.blue};
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  height: 40px;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(2) + ' ' + theme.spacing(3)};
  width: 100%;
  color: ${({ theme }) => theme.font.color.inverted};
  font-family: Inter;
  font-size: ${({ theme }) => theme.font.size.md};
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 150%;
  box-sizing: border-box;
`;

export type BannerVariant = 'danger' | 'default';

export const Banner = ({
  variant = 'default',
  children,
}: {
  variant?: BannerVariant;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => (
  <StyledBanner variant={variant}>{children}</StyledBanner>
);
