import React from "react";
import Input from "./Input";

//to tell the storybook about the component we are documenting
export default {
  component: Input,
  title: "Components/Input",
};

const Template = (args) => <Input {...args} />;

//to define stories we export a function for each state

//Template.bind({}) is a standard JavaScript technique for making a copy of a function.
//We use this technique to allow each exported story to set its own properties, but use the same implementation.
export const Default = Template.bind({});
Default.args = {
  input: {
    id: "1",
    title: "Test Input",
    state: "INPUT_INBOX",
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  input: {
    ...Default.args.input,
    state: "INPUT_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  input: {
    ...Default.args.input,
    state: "INPUT_ARCHIVED",
  },
};
