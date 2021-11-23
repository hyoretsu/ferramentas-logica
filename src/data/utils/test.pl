and(A,B):- is_true(A), is_true(B).
or(A,B):- is_true(A) ; is_true(B).

func(A, B) :-
 is(A, B).
