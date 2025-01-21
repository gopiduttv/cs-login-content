import { defineField, defineType, set, unset, useFormValue } from "sanity";
import { Stack, Text, Card, Select } from "@sanity/ui";
import list from "../../components/common/Color.json";
import { useCallback } from "react";

const DynamicColorDropdown = (props: any) => {
  debugger;
  const { onChange, description, title, name, id, ...restProps } = props;
  const selectedBgColor = useFormValue(["selectedBgColor"]);

  const selectedItem = list?.themes?.find(
    (item: { value: unknown }) => item.value === selectedBgColor
  );
  console.log({ selectedBgColor }, { id });

  const options =
    selectedItem && id === "h1Color"
      ? selectedItem.h1Color || []
      : selectedItem && id === "paragraphColor"
        ? selectedItem.ParagraphColor
        : selectedItem && id === "highlightColor"
          ? selectedItem.highlightColor || []
          : [];

  return (
    <>
      {" "}
      <Card border padding={3}>
        <Stack space={3} marginBottom={3}>
          <Text size={1} weight="bold">
            {title?.toUpperCase()}
          </Text>
          {description && (
            <Text size={1} style={{ color: "green" }}>
              {description}
            </Text>
          )}
        </Stack>
        <Select
          value={props.value}
          onChange={(e: any) => onChange(set(e.target.value))}
        >
          {/* <option value={'1'}>One</option>
        <option value={'2'}>Two</option> */}
          {console.log(options)}
          {options?.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
          Characters: {props.value?.length || 0}
        </Select>
      </Card>
    </>
  );
};

export const BackgroundColor = defineType({
  name: "backgroundLinearGradient",
  title: "Background Color",
  type: "document",
  fields: [
    defineField({
      name: "selectedBgColor",
      title: "Select Background Color Gradient",
      type: "string",
      validation: (rule) => rule.required(),
      options: {
        list: list?.themes?.map((color) => ({
          title: color.title,
          value: color.value,
        })),
      },
    }),

    defineField({
      name: "h1Color",
      title: "Heading Text Color (h1)",
      type: "string",
      components: {
        input: DynamicColorDropdown,
      },
    }),

    defineField({
      name: "paragraphColor",
      title: "Paragraph Color",
      type: "string",
      components: {
        input: DynamicColorDropdown,
      },
    }),

    defineField({
      name: "highlightColor",
      title: "Highlight Color",
      type: "string",
      components: {
        input: DynamicColorDropdown,
      },
    }),
  ],
});
