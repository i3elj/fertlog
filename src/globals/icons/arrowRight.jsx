import { Svg, Path } from 'react-native-svg'

export default function ArrowRightIcon({ style }) {
    return <Svg style={style} width="24" height="32" viewBox="0 0 24 32" fill="none">
        <Path d="M10.5 3L21 16L10.5 29"
            stroke="#777777"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
}
