import React from "react"
import { cleanup, render } from "react-testing-library"
import { PathDebugComponent } from "../../src/components"

describe("components", () => {
  afterEach(cleanup)
  it("PathDebugComponent can render with props", () => {
    const { asFragment } = render(
      <PathDebugComponent
        hash={"hash"}
        pathname={"/path/with/hash/"}
        search={"search"}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
