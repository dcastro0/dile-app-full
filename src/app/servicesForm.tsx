import { Text, View, TextInput, ScrollView, Pressable } from "react-native";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { ResolvedItem } from "@prisma/client";
import { stylesFormService } from "@/styles/styleFormService";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import React from "react";

type FormData = {
  name: string;
  name_client: string;
  phone: string;
  price: string;
  observation: string;
  progress: number;
  resolved_item: ResolvedItem[];
};

export default function App() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      name_client: "",
      phone: "",
      price: "",
      observation: "",
      progress: 0,
      resolved_item: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "resolved_item",
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(
        "http://localhost:8081/api/service_post",
        data
      );
      console.log(response.data);
      reset();
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={stylesFormService.scroll}>
      <View style={stylesFormService.container}>
        <Text style={stylesFormService.title}>Serviço</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Serviço"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={stylesFormService.input}
            />
          )}
          name="name"
        />
        {errors.name && <Text>Este campo é obrigatório.</Text>}

        <Text style={stylesFormService.title}>Itens resolvidos</Text>
        {fields.map((field, index) => (
          <View key={field.id} style={stylesFormService.delete}>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Item"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={[stylesFormService.input, { width: "80%" }]}
                />
              )}
              name={`resolved_item.${index}.name`}
            />
            <Pressable
              onPress={() => remove(index)}
              style={stylesFormService.delete}
            >
              <Feather name="trash-2" size={20} color="#FF0000" />
            </Pressable>
          </View>
        ))}
        <Pressable onPress={() => append({} as ResolvedItem)}>
          <Text style={stylesFormService.adicionar}>+ adicionar item</Text>
        </Pressable>

        <Text style={stylesFormService.title}>Cliente</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Nome"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={stylesFormService.input}
            />
          )}
          name="name_client"
        />
        {errors.name_client && <Text>Este campo é obrigatório.</Text>}

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Telefone"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              inputMode="tel"
              style={stylesFormService.input}
            />
          )}
          name="phone"
        />
        {errors.phone && <Text>Este campo é obrigatório.</Text>}

        <Text style={stylesFormService.title}>Custo</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Custo"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              inputMode="numeric"
              style={stylesFormService.input}
            />
          )}
          name="price"
        />
        {errors.price && <Text>Este campo é obrigatório.</Text>}

        <Text style={stylesFormService.title}>Observação</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Observação"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              multiline
              style={stylesFormService.textArea}
            />
          )}
          name="observation"
        />

        <Text style={stylesFormService.title}>Progresso</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <View style={stylesFormService.progressCard}>
              {[
                "Início",
                "Diagnóstico Pronto",
                "Orçamento Aprovado",
                "Em execução",
                "Finalizado",
                "Testado",
                "Cliente avisado",
                "Veículo retirado",
              ].map((label, index) => (
                <View key={index} style={stylesFormService.progress}>
                  <Pressable
                    onPress={() => onChange(index + 1)}
                    style={
                      value < index + 1
                        ? stylesFormService.select
                        : stylesFormService.selectIn
                    }
                  >
                    <Text style={{ color: "#fff" }}>
                      {value < index + 1 ? (
                        index + 1
                      ) : (
                        <Feather name="check" size={20} color="#fff" />
                      )}
                    </Text>
                  </Pressable>
                  <Text style={stylesFormService.textProgress}>{label}</Text>
                </View>
              ))}
              <View style={stylesFormService.progressB}>
                <Pressable
                  style={stylesFormService.confirm}
                  onPress={handleSubmit(onSubmit)}
                >
                  <Feather name="check" size={40} color="#fff" />
                </Pressable>
                <Pressable
                  style={stylesFormService.cancel}
                  onPress={() => reset()}
                >
                  <Feather name="x" size={40} color="#fff" />
                </Pressable>
              </View>
            </View>
          )}
          name="progress"
        />
        {errors.progress && <Text>Este campo é obrigatório.</Text>}
      </View>
    </ScrollView>
  );
}
