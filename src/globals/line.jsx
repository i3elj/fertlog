import { View } from 'react-native'

import Theme from './style-guide'

const Line = () => (
    <View style={{
        marginHorizontal: 20,
        borderBottomWidth: 3,
        borderColor: Theme.light.gray2
    }} />
)

export default Line;
