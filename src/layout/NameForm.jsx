import { useEffect, useRef, useState } from "react";
import { Input, Stack, IconButton } from "@chakra-ui/react";
import { BiSave, BiEdit } from "react-icons/bi";
import { useAppContext } from "../context/appContext";

export default function NameForm() {
  const { username, setUsername } = useAppContext();
  const [newUsername, setNewUsername] = useState(username);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  // Focus input when editing starts
  useEffect(() => {
    if (isEditing) inputRef.current?.focus();
  }, [isEditing]);

  // Update newUsername when username changes
  useEffect(() => {
    setNewUsername(username);
  }, [username]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUsername.trim()) {
      setUsername(newUsername);
      localStorage.setItem("username", newUsername);
    }
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginRight: "20px" }}>
      <Stack direction="row" align="center">
        {isEditing ? (
          <Input
            ref={inputRef}
            name="username"
            placeholder="Choose a username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            onBlur={handleSubmit}
            bg="gray.100"
            size="sm"
            maxLength="15"
          />
        ) : (
          <span
            onClick={() => setIsEditing(true)}
            style={{ cursor: "pointer" }}
          >
            Welcome <strong>{newUsername}</strong>
          </span>
        )}
        <IconButton
          size="sm"
          variant="outline"
          colorScheme="teal"
          aria-label={isEditing ? "Save" : "Edit"}
          icon={isEditing ? <BiSave /> : <BiEdit />}
          onClick={(e) => {
            if (isEditing) handleSubmit(e);
            else setIsEditing(true);
          }}
        />
      </Stack>
    </form>
  );
}
