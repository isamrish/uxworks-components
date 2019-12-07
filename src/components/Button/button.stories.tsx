import { storiesOf } from "@storybook/react"
import { action } from '@storybook/addon-actions';
import withPropsCombinations from "react-storybook-addon-props-combinations"
import { PrimaryButton } from './Button';

storiesOf("Buttons", module)
  .add(
    "Primary",
    withPropsCombinations(PrimaryButton, {
      children: ["Click Me"],
      size: ["small", undefined, "large"],
      disabled: [ true, false ],
      onClick: [action("click")]
    })
  )
