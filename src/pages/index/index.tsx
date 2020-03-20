import { NextPageContext } from 'next';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Subject } from 'rxjs'
import { ActionsObservable, StateObservable } from 'redux-observable'
import { RootState } from 'typesafe-actions';
import { loadMessage, removeMessage } from '../../store/demo/actions';
import rootEpic from '../../store/root-epic';
import services from '../../services';

// Styled components
import { Button } from '../../styles/ui';
import { Div } from './styles';

const dispatchProps = {
    loadMessage: loadMessage.request,
    removeMessage: removeMessage,
}

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

class IndexPage extends Component<Props> {

    static async getInitialProps({ store, isServer }: NextPageContext) {
        const state$ = new StateObservable(new Subject(), store.getState())
        const action$ = ActionsObservable.of(loadMessage.request(isServer));
        const resultAction = await rootEpic(
            action$,
            state$,
            services
        ).toPromise();
        store.dispatch(resultAction);
    }

    updateMessage = () => {
        this.props.message ?
            this.props.removeMessage() :
            this.props.loadMessage(false);
    }

    render() {
        return <Div>
            <Button onClick={this.updateMessage}>
                {this.props.message ? <>Remove</> : <>Fetch</>}
            </Button>
            {this.props.message && <p>{this.props.message}</p>}
        </Div>
    }
}

const mapStateToProps = (state: RootState) => ({
    message: state.demo.message,
});

export default connect(
    mapStateToProps,
    dispatchProps
)(IndexPage);