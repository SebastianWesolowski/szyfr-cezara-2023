import { FC } from "react";

import { IAppContextProviderProps } from "@/context/types";

import { StyleContextWrapper } from "./contextType/StyleContext";

export const AppContextProvider: FC<IAppContextProviderProps> = ({ children }): JSX.Element => (
  <StyleContextWrapper>{children}</StyleContextWrapper>
);
