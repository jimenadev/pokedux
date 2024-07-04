import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { StarOutlined } from '@ant-design/icons'

const PokemonCard = ({name, image, types}) => {

    const typesString = types.map(elem => elem.type.name).join(', ')

    return <Card
        title={name}
        cover={<img src={image} alt={name} />}
        extra={<StarOutlined />}
    >
        <Meta description={typesString} />
    </Card>
}

export default  PokemonCard