import * as S from './styles'

export type AvatarProps = {
  image?: string
  borderColor?: 'white' | 'primary' | 'secondary'
  borderWeight?: 'normal' | 'thick'
  size?: 'small'
}

const Avatar = ({
  image = '/img/user.jpg',
  borderColor = 'primary',
  borderWeight = 'normal',
  size = 'small'
}: AvatarProps) => (
  <S.Avatar
    src={image}
    alt="User Avatar"
    borderColor={borderColor}
    borderWeight={borderWeight}
    size={size}
  />
)

export default Avatar
