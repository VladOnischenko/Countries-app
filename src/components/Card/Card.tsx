import React from 'react';
import { Wrapper,CardImage,CardTitle,CardList, CardBody,CardListItem} from './styles'

interface Props {
    img?: string,
    name: string,
    info: Array<object>,
    onClick: () => void
}

export const Card = ({img, name, info = [], onClick}: Props) => {

    return (
        <Wrapper onClick={onClick}>
            <CardImage src={img}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map(({title,description}: any) => (
                            <CardListItem key={title}>
                                <b>{title}</b> {description}
                            </CardListItem>
                        ))}
                </CardList>
            </CardBody>
        </Wrapper>
    );
};
