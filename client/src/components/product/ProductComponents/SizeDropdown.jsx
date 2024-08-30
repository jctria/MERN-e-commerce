import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaChevronDown, FaCheck } from 'react-icons/fa';
import './SizeDropdown.css';

const SizeDropdown = ({ isOpen, toggle, selectedSize, sizes, onSizeSelect }) => {
    return (
        <Dropdown isOpen={isOpen} toggle={toggle}>
            <DropdownToggle className="pdp__size-btn">
                {selectedSize} <FaChevronDown />
            </DropdownToggle>
            <DropdownMenu className="pdp__size-menu">
                <DropdownItem
                    className="pdp__size-menu-item select"
                    onClick={() => onSizeSelect('SELECT A SIZE')}
                >
                    <span className="checkmark-wrapper">
                        {selectedSize === 'SELECT A SIZE' ? <FaCheck /> : <span style={{ opacity: 0 }}><FaCheck /></span>}
                    </span>
                    SELECT A SIZE
                </DropdownItem>
                {sizes.map((size, index) => (
                    <DropdownItem
                        className="pdp__size-menu-item"
                        key={index}
                        onClick={() => {
                            console.log("Size selected:", size);
                            onSizeSelect(size); 
                        }}
                    >
                        <span className="checkmark-wrapper">
                            {selectedSize === size ? <FaCheck /> : <span style={{ opacity: 0 }}><FaCheck /></span>}
                        </span>
                        {size}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default SizeDropdown;
