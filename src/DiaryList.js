import DiaryItem from "./DiaryItem";
const DiaryList = ({ onEdit, onRemove, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

//undefinde로 전달 받았을경우 에러가 나니까 디폴드값 지정
DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
