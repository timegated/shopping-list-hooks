import React, {useEffect} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { getItems, deleteItem } from '../../actions/itemActions';

const ShoppingList = () => {
    useEffect(() => {
        dispatch(getItems(items))
    })
    const items  = useSelector(state => state.item.items)
    const dispatch = useDispatch()

    return (
        <Container>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({ _id, name }) => {
                        return (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger" size="sm" onClick={() => dispatch(deleteItem(_id))}>x</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
                </ListGroup>
        </Container>
    )
    
   
}

export default ShoppingList