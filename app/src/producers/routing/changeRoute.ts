export const changeRoute: producer = ({
  trigger = observe.routes.triggers.changeRoute,
  removeTrigger = update.routes.triggers.changeRoute,
  idsRef = get.routes.ids,
  mount = update.routes.list[param.id].isMounted,
  data = update.routes.list[param.id].data,
}) => {
  if (!trigger || !trigger.route) {
    return;
  }
  removeTrigger.remove();
  const ids = idsRef.value();

  ids.forEach((x: string) => {
    mount.set(false, { id: x });
  });

  mount.set(true, { id: trigger.route });
  if (trigger.data) {
    data.set(trigger.data, { id: trigger.route });
  }
};
