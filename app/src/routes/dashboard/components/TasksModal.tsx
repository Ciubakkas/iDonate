import React from "react";

import { Modal } from "src/routes/generalComponents";
import i18n from "src/producers/languages/i18n";
import { Table } from "antd";
import moment from "moment";

export const TasksModal: view = ({ contractId = observe.modal.tasks.contractId, tasks = observe.modal.tasks.list }) => {
  if (!contractId || !tasks) return null;
  const formatedTasks = tasks.map((t: any) => {
    return {
      key: t.id,
      type: t.taskType,
      trigger: moment(t.triggerTime.toDate()).format("DD-MM-YYYY"),
      to: t.payload.email,
      subType: t.notificationType,
    };
  });

  const columns = [
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Subtype",
      dataIndex: "subType",
    },
    {
      title: "Trigger date",
      dataIndex: "trigger",
    },
    {
      title: "to",
      dataIndex: "to",
    },
  ];

  return (
    <Modal title={i18n.t("dashboard_tasks")} width={700}>
      <div className="">
        <Table columns={columns} dataSource={formatedTasks} />
      </div>
    </Modal>
  );
};
