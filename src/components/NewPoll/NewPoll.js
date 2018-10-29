import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../Button";
import Input from "../Input";
import Label from "../Label";
import Select from "../Select";
import {
    handleChangePollQuestion,
} from "./NewPoll.actions";

const StyledPoll = styled.div`
    color: ${props => props.theme.black};
`;

class NewPoll extends Component {
  render() {
    const { pollQuestion, handleChangePollQuestion } = this.props;
        return (
            <StyledPoll>
                <div className="content-wrapper">
                    <h2>Create New Poll</h2>
                    <form>
                        <div>
                            <Label forValue="pollQuestion" text="Question" />
                            <Input type="text" value={pollQuestion} handleChange={handleChangePollQuestion} name="pollQuestion" />
                        </div>
                        <div>
                            <Label forValue="pollUserGroup" text="User Group" />
                            <Select name="pollGroups" />
                        </div>
                        <div>
                            <Button label="Submit Poll" />
                        </div>
                    </form>
                </div>
            </StyledPoll>
        );
    }
}

const mapStateToProps = (state) => ({
  pollQuestion: state.pollQuestion,
});

const mapDispatchToProps = {
  handleChangePollQuestion,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPoll);