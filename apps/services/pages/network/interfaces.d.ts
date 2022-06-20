import type { Service } from '@luos-io/sdk-web';

export interface Node extends d3.SimulationNodeDatum {
  index: number;
  value: number;
  luos_value: number;
  services: Service[];
}
