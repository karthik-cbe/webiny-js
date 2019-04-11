import React, { useContext } from "react";
import { EditorContext } from "webiny-app-forms/admin/plugins/editor/context";
import styled from "react-emotion";
import { IconButton } from "webiny-ui/Button";
import { ReactComponent as EditIcon } from "../icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../icons/delete.svg";

const FieldContainer = styled("div")({
    display: "flex",
    flexDirection: "row"
});

const Info = styled("div")({
    display: "flex",
    flexDirection: "column",
    "> *": {
        flex: "1 100%"
    }
});

const Actions = styled("div")({
    display: "flex",
    flexDirection: "row",
    "> *": {
        flex: "1 100%"
    }
});

const Field = ({ field }) => {
    const { setFormState, deleteFormField } = useContext(EditorContext);

    function editField() {
        setFormState({ editField: field });
    }

    function deleteField() {
        deleteFormField(field);
    }

    return (
        <FieldContainer>
            <Info>
                <strong>{field.label}</strong>
                <span>
                    {field.id} ({field.type})
                </span>
            </Info>
            <Actions>
                <IconButton icon={<EditIcon />} onClick={editField} />
                <IconButton icon={<DeleteIcon />} onClick={deleteField} />
            </Actions>
        </FieldContainer>
    );
};

export default Field;