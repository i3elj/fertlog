import { View } from 'react-native'

import Theme from './style-guide'

const Line = ({ style }) => (
    <View style={[{
        marginHorizontal: 20,
        borderBottomWidth: 3,
        borderColor: Theme.light.gray2
    }, style]} />
)

export default Line;
