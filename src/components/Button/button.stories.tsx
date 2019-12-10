import { storiesOf } from "@storybook/react"
import { action } from '@storybook/addon-actions';
import withPropsCombinations from "react-storybook-addon-props-combinations"
import { PrimaryButton } from './Primary';
import { DangerButton } from './Danger';
storiesOf("Buttons", module)
  .add(
    "Primary",
    withPropsCombinations(PrimaryButton, {
      children: ["Click Me"],
      size: ["small", undefined, "large"],
      disabled: [ true, false ],
      onClick: [action("click")]
    })
  ).add(
    "Danger",
    withPropsCombinations(DangerButton, {
      children: ["Beware"],
      size: ["small", undefined, "large"],
      disabled: [true, false],
      onClick: [action('click')]
    })
  )
