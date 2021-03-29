import React, { useState, useRef, FormEvent, FC } from "react";
import {
  EMPTY_SEARCH_ERR_MSG,
  SEARCH_BAR_PLACEHOLDER,
} from "../../messages/messages";
import {
  Button,
  ErrorMessage,
  Form,
  FormContainer,
  SearchIcon,
  Input,
} from "./SearchBarStyles";
import { BiSearchAlt } from "react-icons/bi";

interface IProps {
  onSearchSubmit: (searchTerm: string) => void;
}

const SearchBar: FC<IProps> = ({ onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [barOpened, setBarOpened] = useState(false);
  const inputFocus = useRef<HTMLInputElement>(null);

  const validateForm = () => {
    let isValid = true;
    if (searchTerm === "") {
      isValid = false;
      setError(EMPTY_SEARCH_ERR_MSG);
    }
    return isValid;
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      onSearchSubmit(searchTerm);
      setSearchTerm("");
      inputFocus.current?.blur();
      setError("");
    }
  };

  return (
    <div>
      <FormContainer>
        <Form
          barOpened={barOpened}
          onClick={() => {
            setBarOpened(true);
            inputFocus?.current?.focus();
          }}
          onFocus={() => {
            setBarOpened(true);
            inputFocus?.current?.focus();
          }}
          onBlur={() => {
            setBarOpened(false);
            setError("");
          }}
          onSubmit={(event) => onSubmit(event)}
          data-testid="search-form"
        >
          <Button type="submit" barOpened={barOpened}>
            <SearchIcon>
              <BiSearchAlt size="30" />
            </SearchIcon>
          </Button>
          <Input
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={inputFocus}
            value={searchTerm}
            barOpened={barOpened}
            placeholder={SEARCH_BAR_PLACEHOLDER}
          />
        </Form>
      </FormContainer>
      {error !== "" && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default SearchBar;
