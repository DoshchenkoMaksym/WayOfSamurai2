
import { Navbar } from './Navbar';
import { connect } from 'react-redux';

let mapDispatchToProps = (dispatch) => {
    return {
    }
};

let mapStateToProps = (state) => {
    return {
        state: state,
    }
}
export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);