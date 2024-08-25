export const createGoalSetting = async (newGoal) => {
  const response = await fetch("/goal-setting", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(newGoal),
  });
  const data = await response.json();
  return data;
};
