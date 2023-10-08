import styled from 'styled-components'

export const MainContent = styled.div`
  display: inline-block;
  position: relative;
  overflow-x: hidden;
`
export const Background = styled.div`
  display: flex;
  height: 34rem;
  margin-top: 5.875rem;
`

export const BackgroundImage = styled.img`
  max-width: 90rem;
  filter: blur(80px);
`

export const Content = styled.div`
  position: absolute;
  width: 100%;
`

export const Separator = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`
export const Text = styled.div`
  width: 36.75rem;
  margin-right: 3.5rem;
`
export const Title = styled.div`
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['gray-900']};
  font-weight: 800;
  font-size: 3rem;
  line-height: 130%;
`
export const SubTitle = styled.div`
  font-family: 'Roboto';
  color: ${(props) => props.theme['gray-800']};
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
  margin-top: 1rem;
  margin-bottom: 4.125rem;
`

export const Items = styled.div`
  display: flex;
  /* width: 100%; */
  &:first-child {
    width: 14.73rem;
  }
`
export const Icon = styled.div`
  display: flex;
  margin-top: 4.125rem;
`
export const TextIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.75rem;
  font-family: Roboto;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme['gray-700']};
`

export const IconSeparator = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-bottom: 1.25rem;
`
