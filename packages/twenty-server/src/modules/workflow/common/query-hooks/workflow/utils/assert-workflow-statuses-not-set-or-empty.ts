import {
  WorkflowQueryValidationException,
  WorkflowQueryValidationExceptionCode,
} from 'src/modules/workflow/common/query-hooks/workflow-query-validation.exception';
import { WorkflowStatus } from 'src/modules/workflow/common/standard-objects/workflow.workspace-entity';

export const assertWorkflowStatusesNotSetOrEmpty = (
  statuses?: WorkflowStatus[] | null,
) => {
  if (statuses && statuses.length > 0) {
    throw new WorkflowQueryValidationException(
      'Statuses cannot be set manually.',
      WorkflowQueryValidationExceptionCode.FORBIDDEN,
    );
  }
};
