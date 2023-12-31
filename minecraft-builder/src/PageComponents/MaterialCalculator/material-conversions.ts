export type Conversion = {
input: string;
inputAmount: number;
output: string;
outputAmount: number;
};
type Conversions = {
  [key: string]: Conversion;
}
export const conversions: Conversions = {
  "Wood logs to Wood planks": {
    input: "Wood logs",
    inputAmount: 1,
    output: "Wood planks",
    outputAmount: 4,
  },
  "Wood planks to Sticks": {
    input: "Wood planks",
    inputAmount: 2,
    output: "Sticks",
    outputAmount: 4,
  },
  "Ingot/ore to Block": {
    input: "Ingot/ore",
    inputAmount: 9,
    output: "Block",
    outputAmount: 1,
  },
  "Glass to Panes": {
    input: "Glass",
    inputAmount: 6,
    output: "Panes",
    outputAmount: 16,
  },
  "Wool to Carpet": {
    input: "Wool",
    inputAmount: 2,
    output: "Carpet",
    outputAmount: 3,
  },
  "Block to Stairs": {
    input: "Block",
    inputAmount: 6,
    output: "Stairs",
    outputAmount: 4,
  },
  "Block to Slabs": {
    input: "Block",
    inputAmount: 3,
    output: "Slabs",
    outputAmount: 6,
  },
  "Wood planks to Chest": {
    input: "Wood planks",
    inputAmount: 8,
    output: "Chest",
    outputAmount: 1,
  },
  "Wood planks to Door": {
    input: "Wood planks",
    inputAmount: 6,
    output: "Door",
    outputAmount: 3,
  },
  "Blocks to Trapdoor": {
    input: "Blocks",
    inputAmount: 6,
    output: "Trapdoor",
    outputAmount: 2,
  },
  "Stick to Ladder": {
    input: "Stick",
    inputAmount: 7,
    output: "Ladder",
    outputAmount: 3,
  },
  "Bricks to Flower pot": {
    input: "Bricks",
    inputAmount: 3,
    output: "Flower pot",
    outputAmount: 1,
  },
  "Nether quartz to Block of quartz": {
    input: "Nether quartz",
    inputAmount: 4,
    output: "Block of quartz",
    outputAmount: 1,
  },
  "Bricks to Brick block": {
    input: "Bricks",
    inputAmount: 4,
    output: "Brick block",
    outputAmount: 1,
  },
  "Nether bricks to Nether brick block": {
    input: "Nether bricks",
    inputAmount: 4,
    output: "Nether brick block",
    outputAmount: 1,
  },
  "Sand to Sandstone": {
    input: "Sand",
    inputAmount: 4,
    output: "Sandstone",
    outputAmount: 1,
  },
  "Prismarine shards to Prismarine block": {
    input: "Prismarine shards",
    inputAmount: 4,
    output: "Prismarine block",
    outputAmount: 1,
  },
  "Prismarine shards to Prismarine bricks block": {
    input: "Prismarine shards",
    inputAmount: 9,
    output: "Prismarine bricks block",
    outputAmount: 1,
  },
  "Slimeballs to Slime block": {
    input: "Slimeballs",
    inputAmount: 9,
    output: "Slime block",
    outputAmount: 1,
  },
  "Snowballs to Snow block": {
    input: "Snowballs",
    inputAmount: 4,
    output: "Snow block",
    outputAmount: 1,
  },
  "Wood planks to Pressure plate": {
    input: "Wood planks",
    inputAmount: 2,
    output: "Pressure plate",
    outputAmount: 1,
  },
  "Iron ingots to Cauldron": {
    input: "Iron ingots",
    inputAmount: 7,
    output: "Cauldron",
    outputAmount: 1,
  },
};