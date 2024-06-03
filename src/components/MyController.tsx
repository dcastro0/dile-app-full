import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";
import React from "react";
import { stylesFormService } from "@/styles/styleFormService";

function MyController<FormType extends FieldValues>({
  control,
  name,
  ...inputProp
}: UseControllerProps<FormType> & TextInputProps) {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            {...inputProp}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
    </View>
  );
}

export { MyController };
