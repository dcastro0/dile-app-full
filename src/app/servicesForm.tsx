import React, { useState } from "react";
import { Text, View, ScrollView, Pressable, Modal } from "react-native";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Feather } from "@expo/vector-icons";
import { stylesFormService } from "@/styles/styleFormService";
import serviceSchema from "@/schemas/serviceSchema";
import { MyController } from "@/components/MyController";
import { api } from "@/server/api";

type FormData = z.infer<typeof serviceSchema>;

export default function ServicesForm() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(serviceSchema),
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
      await api.post("/service_post", data);
      setModalMessage("Formulário enviado com sucesso!");
      setIsError(false);
    } catch (error) {
      setModalMessage(
        "Erro ao enviar o formulário. Por favor, tente novamente."
      );
      setIsError(true);
    } finally {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        reset();
      }, 2000);
    }
  };

  return (
    <ScrollView contentContainerStyle={stylesFormService.scroll}>
      <View style={stylesFormService.container}>
        <Text style={stylesFormService.title}>Serviços</Text>
        <MyController
          placeholder="Serviço"
          control={control}
          style={stylesFormService.input}
          name="name"
        />
        {errors.name && (
          <Text style={stylesFormService.error}>{errors.name.message}</Text>
        )}

        <Text style={stylesFormService.title}>Itens resolvidos</Text>
        {fields.map((field, index) => (
          <View key={field.id}>
            <View style={stylesFormService.delete}>
              <MyController
                placeholder="Item"
                control={control}
                style={[stylesFormService.input, { minWidth: 250 }]}
                name={`resolved_item.${index}.name`}
              />

              <Pressable onPress={() => remove(index)}>
                <Feather name="trash-2" size={20} color="#FF0000" />
              </Pressable>
            </View>
            {errors.resolved_item?.[index]?.name && (
              <Text style={stylesFormService.error}>
                {errors.resolved_item[index]?.name?.message}
              </Text>
            )}
          </View>
        ))}
        <Pressable onPress={() => append({ name: "" })}>
          <Text style={stylesFormService.adicionar}>+ adicionar item</Text>
        </Pressable>

        <Text style={stylesFormService.title}>Cliente</Text>
        <MyController
          placeholder="Nome"
          control={control}
          style={stylesFormService.input}
          name="name_client"
        />

        {errors.name_client && (
          <Text style={stylesFormService.error}>
            {errors.name_client.message}
          </Text>
        )}

        <MyController
          placeholder="Telefone"
          control={control}
          style={stylesFormService.input}
          name="phone"
          inputMode="tel"
        />

        {errors.phone && (
          <Text style={stylesFormService.error}>{errors.phone.message}</Text>
        )}

        <Text style={stylesFormService.title}>Custo</Text>
        <MyController
          placeholder="Custo"
          control={control}
          style={stylesFormService.input}
          name="price"
          inputMode="numeric"
        />

        {errors.price && (
          <Text style={stylesFormService.error}>{errors.price.message}</Text>
        )}

        <Text style={stylesFormService.title}>Observação</Text>
        <MyController
          placeholder="Observação"
          control={control}
          style={stylesFormService.textArea}
          multiline
          name="observation"
        />

        {errors.observation && (
          <Text style={stylesFormService.error}>
            {errors.observation.message}
          </Text>
        )}

        <Text style={stylesFormService.title}>Progresso</Text>
        <Controller
          control={control}
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
              {errors.progress && (
                <Text style={stylesFormService.error}>
                  {errors.progress.message}
                </Text>
              )}
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
      </View>

      <Modal visible={showModal} transparent={true} animationType="fade">
        <View style={stylesFormService.modalContainer}>
          <View style={stylesFormService.modalContent}>
            {isError ? (
              <Text style={stylesFormService.errorText}>{modalMessage}</Text>
            ) : (
              <Text style={stylesFormService.modalText}>{modalMessage}</Text>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
