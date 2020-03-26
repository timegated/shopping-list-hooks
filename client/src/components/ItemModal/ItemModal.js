import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addItem } from '../../actions/itemActions';
import { v4 as uuid } from 'uuid';

const ItemModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    let [name, setName] = useState('')
    
    const dispatch = useDispatch()
    // const item = useSelector(state => state.item.items)
    
    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: uuid(),
            name: name
        }

        dispatch(addItem(newItem))
        toggleModal()
    }

    const onChange = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            <Button color="dark" style={{ marginBottom: '2rem' }} onClick={() => toggleModal()}>Add</Button>
            <Modal isOpen={isOpen}
            toggle={() => toggleModal()}>
                <ModalHeader toggle={() => toggleModal()}>
                    Add to Shopping List
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={(e) => onSubmit(e)}>
                        <FormGroup>
                            <Label for="item">Item</Label>
                                <Input type="text" name="name" id="item" placeholder="Add Shopping Item" onChange={(e) => onChange(e)} />
                            <Button color="dark" type="submit" style={{marginTop: "2rem"}} block>Add Item</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ItemModal