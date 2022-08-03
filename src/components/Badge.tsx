import { BadgeLabel, Color } from "../types";

interface IBadge {
  label: BadgeLabel;
  value: number;
  color: Color;
}

export const Badge = ({ label, value, color }: IBadge) => {
  return (
    <button type="button" className={`btn badge bg-${color} col-2 m-0`}>
      {label}: {value}
    </button>
  );
};
