import Vue from 'vue';

export class GooseComponent extends Vue {
  static name: string;

  static install(vue: typeof Vue): void;
}
