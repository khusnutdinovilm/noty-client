<template>
  <teleport to="body">
    <transition>
      <div v-if="isModalOpen" class="base-modal" @click.prevent="onCloseModal">
        <div class="base-modal__body" @click.stop>
          <div class="base-modal__header">
            <div class="base-modal__icon-block">
              <slot name="base-modal-icon" />
            </div>

            <div class="base-modal__text">
              <div class="base-modal__title">
                {{ modalTitle }}
              </div>

              <div v-if="modalSubtitle" class="base-modal__subtitle">
                {{ modalSubtitle }}
              </div>
            </div>
          </div>

          <div class="base-modal__content">
            <slot name="base-modal-content"></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { watch } from "vue";

defineOptions({
  name: "base-modal",
});

defineProps<{
  modalTitle: string;
  modalSubtitle?: string;
}>();

const emits = defineEmits<{
  (e: "close-modal"): void;
}>();

const isModalOpen = defineModel<boolean>({ required: true });
watch(isModalOpen, modalValue => {
  document.body.style.overflowY = modalValue ? "hidden" : "scroll";
});

const onCloseModal = () => {
  emits("close-modal");
};
</script>
