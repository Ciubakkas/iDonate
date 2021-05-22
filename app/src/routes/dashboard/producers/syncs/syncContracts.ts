import { ContractStatus, RouteName, UserType } from "src/types";
import { db } from "src/producers/firebase";

export const syncContracts: producer = ({
  user = observe.user,
  setContract = update.contracts.listById[param.id],
  isMounted = observe.routes.list[RouteName.DASHBOARD].isMounted,
  selectedTenantId = observe.tenant.id,
}) => {
  if (!user?.isAuth || !isMounted || (user.data.role === UserType.TENANT && !user.data.tenantId)) {
    return;
  }

  try {
    const contractDb = db.collection("contracts");

    const saveContracts = (contracts: any) => {
      contracts.forEach((doc: any) => {
        const data = doc.data();
        if (!data) {
          return;
        }
        setContract.set(data, { id: doc.id });
      });
    };

    if (user.data.role === UserType.TENANT) {
      if (selectedTenantId)
        contractDb
          .where("tenantId", "==", selectedTenantId)
          .where("status", "in", [ContractStatus.NEGOTIATION, ContractStatus.SIGNING, ContractStatus.SIGNED])
          .onSnapshot(saveContracts);
      else
        user.data.tenantId.forEach((id: any) => {
          contractDb
            .where("tenantId", "==", id)
            .where("status", "in", [ContractStatus.NEGOTIATION, ContractStatus.SIGNING, ContractStatus.SIGNED])
            .onSnapshot(saveContracts);
        });
    } else {
      if (selectedTenantId) contractDb.where("tenantId", "==", selectedTenantId).onSnapshot(saveContracts);
      else contractDb.onSnapshot(saveContracts);
    }
  } catch (err) {
    console.error("Error getting contracts", err);
  }
};
