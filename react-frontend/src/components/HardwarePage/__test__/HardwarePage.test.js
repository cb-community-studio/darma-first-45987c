import React from "react";
import { render, screen } from "@testing-library/react";

import HardwarePage from "../HardwarePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders hardware page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <HardwarePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("hardware-datatable")).toBeInTheDocument();
    expect(screen.getByRole("hardware-add-button")).toBeInTheDocument();
});
